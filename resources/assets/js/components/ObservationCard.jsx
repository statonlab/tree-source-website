import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Dropdown, DropdownItem} from './Dropdown'
import Tooltip from './Tooltip'
import moment from 'moment'
import CollectionForm from './CollectionForm'
import FlagForm from './FlagForm'
import Map from '../UI/Map'
import Marker from '../UI/Marker'
import Spinner from '../components/Spinner'

export default class ObservationCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            slide            : false,
            slideContent     : '',
            flagged          : false,
            flag_id          : 0,
            addedToCollection: false,
            observationId    : 0,
            loading          : false
        }

        this.timeoutWatcher = null
    }

    componentWillMount() {
        const observation = this.props.observation

        if (observation.flags.length > 0) {
            this.setState({
                flagged: true,
                flag_id: observation.flags[0].id
            })
        }
    }

    /**
     * Determine if the content page should show or hide.
     *
     * @param label
     */
    shouldSlide(label) {
        let oldLabel = this.state.slideContent
        let slide    = this.state.slide

        //console.log(this.state, label)

        if (this.timeoutWatcher) {
            clearTimeout(this.timeoutWatcher)
        }

        // Clicked twice on the same pane
        if (oldLabel === label) {
            this.slowCloseSlideContent()

            return
        } else if (slide) {
            this.setState({
                slideContent: label
            })

            return
        }

        this.setState({
            slide       : !slide,
            slideContent: label
        })
    }

    /**
     * Hide content with a timeout after the content sliding animation finishes.
     */
    slowCloseSlideContent() {
        this.setState({
            slide: false
        })

        this.timeoutWatcher = setTimeout(() => {
            // Clear content
            this.setState({
                slideContent: ''
            })
        }, 500)
    }

    /**
     * Render the map.
     *
     * @returns {XML}
     */
    renderMap() {
        const observation = this.props.observation
        const image       = observation.images.images ? observation.images.images[0] : '/images/placeholder.png'
        return (
            <Map style={{height: '100%', zIndex: '0'}}
                 center={{
                     lat: observation.location.latitude,
                     lng: observation.location.longitude
                 }}
                 zoom={18}>
                <Marker
                    title={observation.observation_category}
                    position={observation.location}
                    show={true}>
                    <div className="media callout">
                        <div className="media-left mr-0">
                            <img src={image}
                                 alt={observation.observation_category}
                                 style={{
                                     width : 50,
                                     height: 'auto'
                                 }}/>
                        </div>
                        <div className="media-content">
                            <div className="mb-0"><strong>{observation.observation_category}</strong></div>
                            <div className="mb-0">By {observation.user.name}</div>
                            <a href={`/observation/${observation.observation_id}`}>See full description</a>
                        </div>
                    </div>
                </Marker>
            </Map>
        )
    }

    /**
     * Remove observation from collection.
     *
     * @param collection
     * @param observation
     */
    removeFromCollection(collection, observation) {
        this.setState({loading: true})
        axios.delete('/collection/detach', {
            params: {
                collection_id : collection.id,
                observation_id: observation.observation_id
            }
        }).then(response => {
            this.setState({loading: false})
            this.props.onRemovedFromCollection(collection)
        }).catch(error => {
            console.log(error.response)
            this.setState({loading: false})
        })
    }

    /**
     * Render the content of the
     * @param label
     * @returns {*}
     */
    renderSlideContent(label) {
        switch (label) {
            case 'addToCollection':
                return (
                    <div className="card-slide-container">
                        <h3 className="title is-5">Add to Collection</h3>
                        {this.state.addedToCollection ?
                            <div>
                                <div className="notification is-success">
                                    Observation was successfully added to your collection.
                                </div>

                                <button type="button"
                                        className="button"
                                        onClick={() => this.setState({addedToCollection: false})}>Add to Another Collection
                                </button>
                            </div> :
                            <CollectionForm observationId={this.props.observation.observation_id}
                                            collections={this.props.collections}
                                            onSubmit={(data) => {
                                                this.setState({addedToCollection: true})
                                                this.props.onCollectionCreated(data)
                                            }}
                            />
                        }

                        {this.props.observation.collections.map(collection => {
                            return (
                                <div key={collection.id}
                                     className="mt-1 flexbox flex-row flex-v-center flex-space-between"
                                     style={{marginBottom: '0.1rem'}}>
                                    <p>Found in "{collection.label}"</p>
                                    <button onClick={() => this.removeFromCollection(collection, this.props.observation)}
                                            className="button is-small is-danger is-outlined">Remove
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                )
                break
            case 'flag':
                return (
                    <div className="card-slide-container">
                        <h3 className="title is-5">Flag Observation</h3>
                        <FlagForm observationId={this.props.observation.observation_id}
                                  onSubmit={(data) => {
                                      this.setState({flagged: true, flag_id: data.id})
                                      this.props.onFlagChange('added', data)
                                  }}
                                  onUndo={(data) => {
                                      this.setState({flagged: false, flag_id: 0})
                                      this.props.onFlagChange('removed', data)
                                  }}
                                  flagged={this.state.flagged}
                                  flagId={this.state.flag_id}/>
                    </div>
                )
                break
            case 'map':
                return this.renderMap()
                break
            default:
                return null
        }
    }

    render() {
        let observation = this.props.observation
        let name        = observation.observation_category + (observation.observation_category === 'Other' ? ` (${observation.meta_data.otherLabel})` : '')
        return (
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title text-ellipsis">
                        {name}
                    </p>

                    <a className="card-header-icon is-clear">
                        <Tooltip label="Mark as incorrect species">
                            <span className="icon">
                                <i className="fa fa-times"></i>
                            </span>
                        </Tooltip>
                    </a>

                    <a className="card-header-icon is-clear">
                        <Tooltip label="Confirm species">
                            <span className="icon">
                                <i className="fa fa-check"></i>
                            </span>
                        </Tooltip>
                    </a>
                </header>
                <div className="relative-block">
                    <Spinner visible={this.state.loading}/>
                    <div className="has-bg-image">
                        <div className="card-image"
                             style={{
                                 backgroundImage: `url(${observation.images.images[0] || '/images/placeholder.png'})`
                             }}>
                        </div>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            By {observation.user.name}<br/>
                            <a href={`/observation/${observation.observation_id}`}>See Full Details</a><br/>
                            <small>{moment(observation.date.date).format('MMM, D YYYY H:m A Z')}</small>
                            {observation.location.address !== null ?
                                <div className="text-ellipsis" title={observation.location.address.formatted}>
                                    <small><b>Near</b> {observation.location.address.formatted}</small>
                                </div>
                                : <div style={{height: 24}}></div>}
                        </div>
                    </div>
                    <div className={`card-slide-content${this.state.slide ? ' show' : ''}`}>
                        <div className="p-1 relative-block">
                            <button href="javascript:;"
                                    className="close button"
                                    type="button"
                                    onClick={this.slowCloseSlideContent.bind(this)}>
                                <i className="fa fa-times"></i></button>
                            {this.renderSlideContent(this.state.slideContent)}
                        </div>
                    </div>
                </div>
                <footer className="card-footer">
                    <a href="javascript:;"
                       className="card-footer-item is-paddingless"
                       onClick={() => this.shouldSlide('addToCollection')}>
                        <Tooltip label="Add to Collection" style={{padding: '0.75rem'}}>
                            <span className="icon is-small is-marginless">
                                <i className="fa fa-plus"></i>
                            </span>
                        </Tooltip>
                    </a>
                    <a href="javascript:;"
                       className="card-footer-item is-paddingless"
                       onClick={() => this.shouldSlide('map')}>
                        <Tooltip label="Show on Map" style={{padding: '0.75rem'}}>
                            <span className="icon is-small is-marginless">
                                <i className="fa fa-map"></i>
                            </span>
                        </Tooltip>
                    </a>
                    {window.Laravel.isAdmin &&
                    <a href="javascript:;"
                       className="card-footer-item is-paddingless"
                       onClick={() => {
                           this.props.onEmailRequest(observation)
                       }}>
                        <Tooltip label="Contact Submitter" style={{padding: '0.75rem'}}>
                            <span className="icon is-small is-marginless">
                                <i className="fa fa-envelope"></i>
                            </span>
                        </Tooltip>
                    </a>}
                    <a href="javascript:;"
                       className="card-footer-item is-paddingless"
                       onClick={() => this.shouldSlide('flag')}>
                        <Tooltip label="Flag as Inappropriate" style={{padding: '0.75rem'}}>
                            <span className="icon is-small is-marginless">
                                <i className={`fa fa-flag${this.state.flagged ? ' text-danger' : ''}`}></i>
                            </span>
                        </Tooltip>
                    </a>
                </footer>
            </div>
        )
    }
}

ObservationCard.PropTypes = {
    observation            : PropTypes.object.isRequired,
    onFlagChange           : PropTypes.func,
    onCollectionCreated    : PropTypes.func,
    onRemovedFromCollection: PropTypes.func,
    onEmailRequest         : PropTypes.func,
    collections            : PropTypes.array
}

ObservationCard.defaultProps = {
    onFlagChange() {
    },
    onCollectionCreated() {
    },
    onEmailRequest(observation){
    },
    onRemovedFromCollection(collection) {
    },
    collections: []
}
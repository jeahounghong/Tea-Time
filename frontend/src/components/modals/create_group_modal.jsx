import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import '../../stylesheets/modal.css';
import React from 'react';

class CreateGroupModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            ownerId: '',
            courseId: '',
            groupId: '',
            eventTime: '',
            eventSize: '',
            description: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderModal = this.renderModal.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        // create event here with this.state 

        // close modal after submitting form 
        this.props.toggleModal();
    }

    renderModal() {
        return (
            <div id="modal">
                <div id="overlay" onClick={this.props.toggleModal}></div>
                <div className="modal">
                    <div className="modal-header">
                        <p className="modal-header-info">Create Group</p>
                        <div className="modal-close" onClick={this.props.toggleModal} >
                            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="modal-form-separator"></div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="modal-input">
                            <label>Name</label>
                            <input type="text" value={this.state.name} onChange={this.update('name')} />
                        </div>
                        <div className="modal-input">
                            <label>Date</label>
                            <input type="date" value={this.state.eventTime} onChange={this.update('eventTime')} />
                        </div>
                        <div className="modal-input">
                            <label>Size</label>
                            <input type="number" value={this.state.eventSize} onChange={this.update('eventSize')} min={2} max={4} />
                        </div>
                        <div className="modal-input" id="modal-text-input">
                            <label>Description</label>
                            <textarea className="modal-text"></textarea>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    render() {
        return this.renderModal();
    }
}

export default CreateGroupModal;
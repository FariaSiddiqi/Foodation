import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../Styles/CreateGoalModal.css";

const CreateGoalModal = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Create New Goal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="FormContainer">
                    <Form.Group controlId="goalTitle">
                        <Form.Label>Goal Title</Form.Label>
                        <Form.Control type="text" placeholder="Ex: Fight Hunger" className="input-field" />
                    </Form.Group>
                    <Form.Group controlId="limitNumberOfIndividuals">
                        <Form.Label>Limit Number of Individuals</Form.Label>
                        <Form.Control type="number" placeholder="Ex: 40" className="input-field" />
                    </Form.Group>
                    <Form.Group controlId="uploadFoodImage">
                        <Form.Label>Upload Food Image</Form.Label>
                        <div className="upload-box">
                            <Form.Control type="file" className="upload-input" />
                            <div className="upload-placeholder">
                                <p style={{ marginBottom: 0 }}><span>Click to upload</span> or drop file here</p>
                                <p style={{ marginBottom: 0 }} className="supported-formats">Supported .png .jpg</p>
                            </div>

                        </div>
                    </Form.Group>
                    <Form.Group controlId="foodItem">
                        <Form.Label>Food Item</Form.Label>
                        <Form.Control type="text" placeholder="Ex: Banana" className="input-field" />
                    </Form.Group>
                    <Form.Group controlId="foodQuantity">
                        <Form.Label>Food Quantity</Form.Label>
                        <Form.Control style={{ marginBottom: 0 }} type="text" placeholder="Ex: 2 dozen" className="input-field" />
                        <Button variant="link" className="add-more">+ Add More</Button>
                    </Form.Group>

                    <Form.Group controlId="earnPoints">
                        <Form.Label>Earn Points</Form.Label>
                        <Form.Control type="number" placeholder="Ex: 5" className="input-field" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Goal
                </Button>
            </Modal.Footer>
        </Modal >
    );
};

export default CreateGoalModal;

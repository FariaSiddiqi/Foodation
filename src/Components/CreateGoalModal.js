import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../Styles/CreateGoalModal.css";

const CreateGoalModal = ({ show, handleClose, addGoal }) => {
    const [goalTitle, setGoalTitle] = useState("");
    const [limitIndividuals, setLimitIndividuals] = useState("");
    const [foodImage, setFoodImage] = useState(null);
    const [foodItem, setFoodItem] = useState("");
    const [foodQuantity, setFoodQuantity] = useState("");
    const [earnPoints, setEarnPoints] = useState("");

    const handleImageUpload = (e) => {
        setFoodImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleSave = () => {
        const newGoal = {
            goalImage: foodImage,
            title: goalTitle,
            description: `${foodQuantity} of ${foodItem}`,
            progress: 0, // Assuming new goals start at 0% progress
            enrolled: `0/${limitIndividuals}`,
            rewardPoints: earnPoints,
        };

        addGoal(newGoal);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Create New Goal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="FormContainer">
                    <Form.Group controlId="goalTitle">
                        <Form.Label>Goal Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ex: Fight Hunger"
                            className="input-field"
                            value={goalTitle}
                            onChange={(e) => setGoalTitle(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="limitNumberOfIndividuals">
                        <Form.Label>Limit Number of Individuals</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Ex: 40"
                            className="input-field"
                            value={limitIndividuals}
                            onChange={(e) => setLimitIndividuals(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="uploadFoodImage">
                        <Form.Label>Upload Food Image</Form.Label>
                        <div className="upload-box">
                            <Form.Control
                                type="file"
                                className="upload-input"
                                onChange={handleImageUpload}
                            />
                            <div className="upload-placeholder">
                                <p style={{ marginBottom: 0 }}>
                                    <span>Click to upload</span> or drop file here
                                </p>
                                <p style={{ marginBottom: 0 }} className="supported-formats">
                                    Supported .png .jpg
                                </p>
                            </div>
                        </div>
                        {foodImage && (
                            <div className="image-preview">
                                <img src={foodImage} alt="Preview" />
                            </div>
                        )}
                    </Form.Group>
                    <Form.Group controlId="foodItem">
                        <Form.Label>Food Item</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ex: Banana"
                            className="input-field"
                            value={foodItem}
                            onChange={(e) => setFoodItem(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="foodQuantity">
                        <Form.Label>Food Quantity</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ex: 2 dozen"
                            className="input-field"
                            value={foodQuantity}
                            onChange={(e) => setFoodQuantity(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="earnPoints">
                        <Form.Label>Earn Points</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Ex: 5"
                            className="input-field"
                            value={earnPoints}
                            onChange={(e) => setEarnPoints(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Save Goal
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateGoalModal;

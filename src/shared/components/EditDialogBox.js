import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import {
  Button,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Card as MuiCard,
  Paper as MuiPaper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Snackbar,
  Alert,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { spacing } from "@mui/system";

const Card = styled(MuiCard)(spacing);
const Paper = styled(MuiPaper)(spacing);

function EditDialogBox(props) {
  const {
    formDialogResponse,
    setFormDialogResponse,
    setIsEditSuccess,
    setEditValues,
  } = props;
  const { t } = useTranslation();
  const [studentName, setStudentName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [studentId, setStudentId] = useState(0);
  const [courseId, setCourseId] = useState(0);
  const [employeeId, setEmployeeId] = useState(0);
  const [description, setDescription] = useState("");
  const [creditHour, setCreditHour] = useState("");
  const [totalCost, setTotalCost] = useState("");
  const [selectedCourseName, setSelectedCourseName] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("");
  const [selectedTotalStudent, setSelectedTotalStudent] = useState("");
  const [selectedProfessorName, setSelectedProfessorName] = useState("");
  const [staffName, setStaffName] = useState("");
  const [joinedDate, setJoinedDate] = useState("");
  const [designation, setDesignation] = useState("");
  const [status, setStatus] = useState("");
  const [editDialog, setEditDialog] = useState("");
  const [mineType, setMineType] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [emails, setEmails] = useState("");
  const [courseState, setCourseState] = useState({
    helperText: "",
    error: false,
  });
  const [studentNameState, setStudentNameState] = useState({
    helperText: "",
    error: false,
  });
  const [descriptionState, setDescriptionState] = useState({
    helperText: "",
    error: false,
  });
  const [creditHourState, setCreditHourState] = useState({
    helperText: "",
    error: false,
  });
  const [totalCostState, setTotalCostState] = useState({
    helperText: "",
    error: false,
  });
  const [staffNameState, setStaffNameState] = useState({
    helperText: "",
    error: false,
  });
  const [statusState, setStatusState] = useState({
    helperText: "",
    error: false,
  });
  const [joinedDateState, setJoinedDateState] = useState({
    helperText: "",
    error: false,
  });
  const [designationState, setDesignationState] = useState({
    helperText: "",
    error: false,
  });

  useEffect(() => {
    setStudentName(formDialogResponse.studentName);
    setCourseName(formDialogResponse.courseName);
    setStudentId(formDialogResponse.studentId);
    setCourseId(formDialogResponse.courseId);
    setEmployeeId(formDialogResponse.employeeId);
    setDescription(formDialogResponse.description);
    setCreditHour(formDialogResponse.creditHour);
    setTotalCost(formDialogResponse.totalCost);
    setSelectedCourseName(formDialogResponse.courseName);
    setSelectedBatch(formDialogResponse.Batch);
    setSelectedProfessorName(formDialogResponse.professorName);
    setSelectedTotalStudent(formDialogResponse.totalStudent);
    setStaffName(formDialogResponse.staffName);
    setJoinedDate(formDialogResponse.joinedDate);
    setDesignation(formDialogResponse.designation);
    setStatus(formDialogResponse.status);
    setEditDialog(formDialogResponse.editDialog);
    setMineType(formDialogResponse.action);
  }, [
    formDialogResponse.studentName,
    formDialogResponse.studentId,
    formDialogResponse.courseId,
    formDialogResponse.employeeId,
    formDialogResponse.courseName,
    formDialogResponse.editDialog,
    formDialogResponse.action,
    formDialogResponse.description,
    formDialogResponse.creditHour,
    formDialogResponse.totalCost,
    formDialogResponse.Batch,
    formDialogResponse.professorName,
    formDialogResponse.totalStudent,
    formDialogResponse.staffName,
    formDialogResponse.joinedDate,
    formDialogResponse.designation,
    formDialogResponse.status,
  ]);

  const handleClose = () => {
    setFormDialogResponse({
      ...formDialogResponse,
      open: false,
    });
  };

  const changeStudentName = (event) => {
    const StudentNameValue = event.target.value;
    setStudentName(StudentNameValue);
    if (!event.target.value.trim()) {
      setStudentNameState({
        helperText: "Student Name is required",
        error: true,
      });
    } else {
      setStudentNameState({ helperText: "", error: false });
    }
  };
  const changeCourseName = (event) => {
    setCourseName(event.target.value);
    if (!event.target.value.trim()) {
      setCourseState({ helperText: "Course Name is required", error: true });
    } else {
      setCourseState({ helperText: "", error: false });
    }
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    if (!event.target.value.trim()) {
      setDescriptionState({
        helperText: "Description is required",
        error: true,
      });
    } else {
      setDescriptionState({ helperText: "", error: false });
    }
  };

  const handleCreditHourChange = (event) => {
    setCreditHour(event.target.value);
    if (!event.target.value.trim()) {
      setCreditHourState({
        helperText: "Credit Hour is required",
        error: true,
      });
    } else {
      setCreditHourState({ helperText: "", error: false });
    }
  };
  const handleTotalCostChange = (event) => {
    setTotalCost(event.target.value);
    if (!event.target.value.trim()) {
      setTotalCostState({ helperText: "Total Cost is required", error: true });
    } else {
      setTotalCostState({ helperText: "", error: false });
    }
  };

  const handleStaffNameChange = (event) => {
    setStaffName(event.target.value);
    if (!event.target.value.trim()) {
      setStaffNameState({ helperText: " Name is required", error: true });
    } else {
      setStaffNameState({ helperText: "", error: false });
    }
  };
  const handleJoinedDateChange = (event) => {
    setJoinedDate(event.target.value);
    if (!event.target.value.trim()) {
      setJoinedDateState({
        helperText: " Joined Date is required",
        error: true,
      });
    } else {
      setJoinedDateState({ helperText: "", error: false });
    }
  };
  const handleDesignationChange = (event) => {
    setDesignation(event.target.value);
    if (!event.target.value.trim()) {
      setDesignationState({
        helperText: " Designation is required",
        error: true,
      });
    } else {
      setDesignationState({ helperText: "", error: false });
    }
  };
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    if (!event.target.value.trim()) {
      setStatusState({ helperText: "Status is required", error: true });
    } else {
      setStatusState({ helperText: "", error: false });
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const handleEmailsChange = (event) => {
    setEmails(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isManageUniversityStudent) {
      let isError = false;
      if (studentName === "") {
        isError = true;
        setStudentNameState({
          helperText: "Student Name is required",
          error: true,
        });
      }
      if (selectedCourseName === "") {
        isError = true;
        setCourseState({ helperText: "courseName is required", error: true });
      }
      if (!isError) {
        setEditValues({
          studentName: studentName,
          courseName: selectedCourseName,
          studentId: studentId,
        });
        setOpenSnackbar(true);
        handleClose();
        setIsEditSuccess(true);
      }
    } else if (isManageUniversityTuition) {
      let isError = false;
      if (courseName === "") {
        isError = true;
        setCourseState({ helperText: "Course Name is required", error: true });
      }
      if (description === "") {
        isError = true;
        setDescriptionState({
          helperText: "Description is required",
          error: true,
        });
      }
      if (creditHour === "") {
        isError = true;
        setCreditHourState({
          helperText: "CreditHour is required",
          error: true,
        });
      }
      if (totalCost === "") {
        isError = true;
        setTotalCostState({
          helperText: "Total Cost is required",
          error: true,
        });
      }
      if (!isError) {
        setEditValues({
          courseName: courseName,
          description: description,
          creditHour: creditHour,
          totalCost: totalCost,
          courseId: courseId,
        });
        setOpenSnackbar(true);
        handleClose();
        setIsEditSuccess(true);
      }
    } else if (isManageUniversityClass) {
      setEditValues({
        courseName: selectedCourseName,
        Batch: selectedBatch,
        professorName: selectedProfessorName,
        totalStudent: selectedTotalStudent,
        courseId: courseId,
      });
      setOpenSnackbar(true);
      handleClose();
      setIsEditSuccess(true);
    }
    if (isManageUniversityEmployee) {
      let isError = false;
      if (staffName === "") {
        isError = true;
        setStaffNameState({ helperText: " Name is required", error: true });
      }
      if (joinedDate === "") {
        isError = true;
        setJoinedDateState({
          helperText: " Joined Date is required",
          error: true,
        });
      }
      if (designation === "") {
        isError = true;
        setDesignationState({
          helperText: " Designation is required",
          error: true,
        });
      }
      if (status === "") {
        isError = true;
        setStatusState({ helperText: "Status is required", error: true });
      }
      if (!isError) {
        setEditValues({
          staffName: staffName,
          joinedDate: joinedDate,
          designation: designation,
          status: status,
          employeeId: employeeId,
        });
        setOpenSnackbar(true);
        handleClose();
        setIsEditSuccess(true);
      }
    }
    if (isTuitionListing) {
      setEditValues({
        action: mineType,
        courseId: courseId,
      });
      setOpenSnackbar(true);
      handleClose();
      setIsEditSuccess(true);
    }
    if (isShareCourse) {
      setOpenSnackbar(true);
      handleClose();
    }
  };

  const isTuitionListing = formDialogResponse.editDialog === "TuitionListings";
  const isShareCourse = formDialogResponse.editDialog === "shareCourse";
  const isManageUniversityStudent =
    formDialogResponse.editDialog === "Manage University Student";
  const isManageUniversityTuition =
    formDialogResponse.editDialog === "Manage University Tuition";
  const isManageUniversityClass =
    formDialogResponse.editDialog === "Manage University Class";
  const isManageUniversityEmployee =
    formDialogResponse.editDialog === "Manage University Employee";
  let dialogBoxTitle = "";
  if (isTuitionListing) {
    dialogBoxTitle = [t("Update"), t("Mine"), t("Type")].join(" ");
  } else if (isShareCourse) {
    dialogBoxTitle = [t("Share"), t("Course(s)")].join(" ");
  } else if (isManageUniversityStudent) {
    dialogBoxTitle = [t("Update"), t("Student")].join(" ");
  } else if (isManageUniversityTuition) {
    dialogBoxTitle = [t("Update"), t("Tuition")].join(" ");
  } else if (isManageUniversityClass) {
    dialogBoxTitle = [t("Update"), t("Class")].join(" ");
  } else if (isManageUniversityEmployee) {
    dialogBoxTitle = [t("Update"), t("Workforce")].join(" ");
  }
  const isSaveButtonDisabled = emails.trim() === "";

  return (
    <React.Fragment>
      <Card mb={6}>
        <CardContent>
          <Paper mt={4}>
            <Snackbar
              open={openSnackbar}
              autoHideDuration={3000}
              onClose={handleCloseSnackbar}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Alert
                elevation={6}
                variant="filled"
                onClose={handleCloseSnackbar}
                severity="success"
              >
                {isShareCourse
                  ? "Course(s) shared successfully!"
                  : "Data Table Updated Successfully!"}
              </Alert>
            </Snackbar>
            <Dialog
              open={formDialogResponse.open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">
                {isManageUniversityStudent &&
                  `${dialogBoxTitle} - ${formDialogResponse.studentName}`}
                {isManageUniversityTuition && `${dialogBoxTitle}`}
                {isManageUniversityClass && `${dialogBoxTitle}`}
                {isManageUniversityEmployee && `${dialogBoxTitle}`}
                {isShareCourse && `${dialogBoxTitle}`}
                {isTuitionListing && dialogBoxTitle}
              </DialogTitle>
              {isTuitionListing && (
                <DialogContent>
                  <InputLabel id="mine-type-label">Mine Type</InputLabel>
                  <Select
                    labelId="mine-type-label"
                    id="mine-type"
                    value={mineType}
                    onChange={(e) => setMineType(e.target.value)}
                    label="Mine Type"
                    fullWidth
                  >
                    <MenuItem value="Private">Private</MenuItem>
                    <MenuItem value="Public">Public</MenuItem>
                  </Select>
                </DialogContent>
              )}
              {isShareCourse && (
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    label="Emails"
                    fullWidth
                    value={emails}
                    error={isSaveButtonDisabled}
                    helperText={
                      isSaveButtonDisabled &&
                      "Please enter at least one email address"
                    }
                    onChange={handleEmailsChange}
                  />
                </DialogContent>
              )}
              {isManageUniversityStudent && (
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    value={studentName}
                    id="studentName"
                    label={[t("Student"), t("Name")].join(" ")}
                    type="text"
                    fullWidth
                    required={true}
                    onChange={changeStudentName}
                    error={studentNameState.error}
                    helperText={studentNameState.helperText}
                  />
                  <FormControl
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                  >
                    <InputLabel id="role-select-label">Course Name</InputLabel>
                    <Select
                      labelId="role-select-label"
                      id="role-select"
                      value={selectedCourseName}
                      onChange={(e) => setSelectedCourseName(e.target.value)}
                      label="Course Name"
                      error={courseState.error}
                    >
                      <MenuItem value="Introduction to Computer Science">
                        Introduction to Computer Science
                      </MenuItem>
                      <MenuItem value="Data Structures and Algorithms">
                        Data Structures and Algorithms
                      </MenuItem>
                      <MenuItem value="Web Development">
                        Web Development
                      </MenuItem>
                      <MenuItem value="Artificial Intelligence">
                        Artificial Intelligence
                      </MenuItem>
                      <MenuItem value="Database Systems">
                        Database Systems
                      </MenuItem>
                    </Select>
                    <FormHelperText>{courseState.helperText}</FormHelperText>
                  </FormControl>
                </DialogContent>
              )}
              {isManageUniversityTuition && (
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    value={courseName}
                    id="courseName"
                    label={[t("Course"), t("Name")].join(" ")}
                    type="text"
                    fullWidth
                    required={true}
                    onChange={changeCourseName}
                    error={courseState.error}
                    helperText={courseState.helperText}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    value={description}
                    id="description"
                    label={t("Description")}
                    type="text"
                    fullWidth
                    required={true}
                    onChange={handleDescriptionChange}
                    error={descriptionState.error}
                    helperText={descriptionState.helperText}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    value={creditHour}
                    id="creditHour"
                    label={[t("Credit"), t("Hour")].join(" ")}
                    type="text"
                    fullWidth
                    required={true}
                    onChange={handleCreditHourChange}
                    error={creditHourState.error}
                    helperText={creditHourState.helperText}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    value={totalCost}
                    id="totalCost"
                    label={[t("Total"), t("Cost")].join(" ")}
                    type="text"
                    fullWidth
                    required={true}
                    onChange={handleTotalCostChange}
                    error={totalCostState.error}
                    helperText={totalCostState.helperText}
                  />
                </DialogContent>
              )}
              {isManageUniversityClass && (
                <DialogContent>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                  >
                    <InputLabel id="role-select-label">Course Name</InputLabel>
                    <Select
                      labelId="role-select-label"
                      id="role-select"
                      value={selectedCourseName}
                      onChange={(e) => setSelectedCourseName(e.target.value)}
                      label="Course Name"
                    >
                      <MenuItem value="Introduction to Computer Science">
                        Introduction to Computer Science
                      </MenuItem>
                      <MenuItem value="Data Structures and Algorithms">
                        Data Structures and Algorithms
                      </MenuItem>
                      <MenuItem value="Web Development">
                        Web Development
                      </MenuItem>
                      <MenuItem value="Artificial Intelligence">
                        Artificial Intelligence
                      </MenuItem>
                      <MenuItem value="Database Systems">
                        Database Systems
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                  >
                    <InputLabel id="role-select-label">Batch</InputLabel>
                    <Select
                      labelId="role-select-label"
                      id="role-select"
                      value={selectedBatch}
                      onChange={(e) => setSelectedBatch(e.target.value)}
                      label="Batch"
                    >
                      <MenuItem value="Batch1(10am-11am EST)">
                        Batch1(10am-11am)
                      </MenuItem>
                      <MenuItem value="Batch2(11am-12pm EST)">
                        Batch2(11am-12pm)
                      </MenuItem>
                      <MenuItem value="Batch3(1pm-2pm EST)">
                        Batch3(1pm-2pm)
                      </MenuItem>
                      <MenuItem value="Batch3(1pm-2pm EST)">
                        Batch4(2pm-3pm)
                      </MenuItem>
                      <MenuItem value="Batch3(1pm-2pm EST)">
                        Batch5(3pm-4pm)
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                  >
                    <InputLabel id="role-select-label">
                      Professor Name
                    </InputLabel>
                    <Select
                      labelId="role-select-label"
                      id="role-select"
                      value={selectedProfessorName}
                      onChange={(e) => setSelectedProfessorName(e.target.value)}
                      label="Professor Name"
                    >
                      <MenuItem value="John Smith">John Smith</MenuItem>
                      <MenuItem value="Jane Doe">Jane Doe</MenuItem>
                      <MenuItem value="Alex Johnson">Alex Johnson</MenuItem>
                      <MenuItem value="JMaria Rodriguez">
                        Maria Rodriguez
                      </MenuItem>
                      <MenuItem value="Mark Lee">Mark Lee</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                  >
                    <InputLabel id="role-select-label">
                      Total Student
                    </InputLabel>
                    <Select
                      labelId="role-select-label"
                      id="role-select"
                      value={selectedTotalStudent}
                      onChange={(e) => setSelectedTotalStudent(e.target.value)}
                      label="Total Student"
                    >
                      <MenuItem value="50">50</MenuItem>
                      <MenuItem value="75">75</MenuItem>
                      <MenuItem value="100">100</MenuItem>
                    </Select>
                  </FormControl>
                </DialogContent>
              )}
              {isManageUniversityEmployee && (
                <DialogContent>
                  <TextField
                    fullWidth
                    margin="normal"
                    required
                    type="text"
                    defaultValue=""
                    label="Name"
                    placeholder="Enter the Name"
                    name="staffName"
                    value={staffName}
                    onChange={handleStaffNameChange}
                    error={staffNameState.error}
                    helperText={staffNameState.helperText}
                  />
                  <TextField
                    fullWidth
                    margin="normal"
                    required
                    type="text"
                    defaultValue=""
                    label="Joined Date"
                    placeholder="Enter the Joined Date"
                    name="joinedDate"
                    value={joinedDate}
                    onChange={handleJoinedDateChange}
                    error={joinedDateState.error}
                    helperText={joinedDateState.helperText}
                  />

                  <TextField
                    fullWidth
                    margin="normal"
                    required
                    type="text"
                    defaultValue=""
                    label="Designation"
                    placeholder="Enter the Designation"
                    name="designation"
                    value={designation}
                    onChange={handleDesignationChange}
                    error={designationState.error}
                    helperText={designationState.helperText}
                  />
                  <FormControl
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                  >
                    <InputLabel id="role-select-label">Status</InputLabel>
                    <Select
                      labelId="status-select-label"
                      id="status-select"
                      value={status}
                      onChange={handleStatusChange}
                      label="Status"
                      error={statusState.error}
                    >
                      <MenuItem value="active">Active</MenuItem>
                      <MenuItem value="inActive">InActive</MenuItem>
                    </Select>
                  </FormControl>
                  <FormHelperText>{statusState.helperText}</FormHelperText>
                </DialogContent>
              )}
              <form onSubmit={handleSubmit}>
                <DialogActions>
                  <Button onClick={handleClose} color="secondary">
                    Close
                  </Button>
                  <Button
                    type="submit"
                    color="secondary"
                    disabled={isShareCourse && isSaveButtonDisabled}
                  >
                    {isShareCourse ? "Share" : "Update"}
                  </Button>
                </DialogActions>
              </form>
            </Dialog>
          </Paper>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
export default EditDialogBox;

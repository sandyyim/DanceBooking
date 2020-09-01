package com.dancelab.booking.model;

public class CourseBookingResponseModel {

    private String status;
    private String returnMessage;

    public CourseBookingResponseModel() {
    }

    public CourseBookingResponseModel(String status, String returnMessage) {
        this.status = status;
        this.returnMessage = returnMessage;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getReturnMessage() {
        return returnMessage;
    }

    public void setReturnMessage(String returnMessage) {
        this.returnMessage = returnMessage;
    }

    @Override
    public String toString() {
        return "CourseBookingResponseModel{" +
                "status='" + status + '\'' +
                ", returnMessage='" + returnMessage + '\'' +
                '}';
    }
}

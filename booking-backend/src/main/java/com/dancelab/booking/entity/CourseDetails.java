package com.dancelab.booking.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="course_details")
public class CourseDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @NotNull
    @Column(name="course_id")
    private String courseId;

    @Column(name="course_date")
    private String courseDate;

    @Column(name="course_start_time")
    private String courseStartTime;

    @Column(name="course_end_time")
    private String courseEndTime;

    @Column(name="tutor_name")
    private String tutorName;

    @Column(name="course_name")
    private String courseName;

    @Column(name="number_of_points")
    private Integer numberOfPoints;

    @Column(name="capacity")
    private Integer capacity;

    public CourseDetails() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCourseId() {
        return courseId;
    }

    public void setCourseId(String courseId) {
        this.courseId = courseId;
    }

    public String getCourseDate() {
        return courseDate;
    }

    public void setCourseDate(String courseDate) {
        this.courseDate = courseDate;
    }

    public String getCourseStartTime() {
        return courseStartTime;
    }

    public void setCourseStartTime(String courseStartTime) {
        this.courseStartTime = courseStartTime;
    }

    public String getCourseEndTime() {
        return courseEndTime;
    }

    public void setCourseEndTime(String courseEndTime) {
        this.courseEndTime = courseEndTime;
    }

    public String getTutorName() {
        return tutorName;
    }

    public void setTutorName(String tutorName) {
        this.tutorName = tutorName;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public Integer getNumberOfPoints() {
        return numberOfPoints;
    }

    public void setNumberOfPoints(int numberOfPoints) {
        this.numberOfPoints = numberOfPoints;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    @Override
    public String toString() {
        return "CourseDetails{" +
                "id=" + id +
                ", courseId='" + courseId + '\'' +
                ", courseDate='" + courseDate + '\'' +
                ", courseStartTime='" + courseStartTime + '\'' +
                ", courseEndTime='" + courseEndTime + '\'' +
                ", tutorName='" + tutorName + '\'' +
                ", courseName='" + courseName + '\'' +
                ", numberOfPoints='" + numberOfPoints + '\'' +
                ", capacity='" + capacity + '\'' +
                '}';
    }
}

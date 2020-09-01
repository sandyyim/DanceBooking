package com.dancelab.booking.controller;

import com.dancelab.booking.entity.CourseDetails;
import com.dancelab.booking.entity.MemberDetails;
import com.dancelab.booking.model.CourseBookingResponseModel;
import com.dancelab.booking.service.CourseDetailsService;
import com.dancelab.booking.service.MemberDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
public class CourseController {

    @Autowired
    private CourseDetailsService courseDetailsService;

    @Autowired
    private MemberDetailsService memberDetailsService;

    @PostMapping("/course/browse")
    public List<CourseDetails> listCourseDetails(@RequestParam(name = "from") String courseDateFrom, @RequestParam(name = "to") String courseDateTo) {
        List<CourseDetails> courseDetailsList = courseDetailsService.listCourseDetailsWithSpecificPeriod(courseDateFrom, courseDateTo);
        return courseDetailsList;
    }

    @PostMapping("/course/book")
    public CourseBookingResponseModel bookCourse(@RequestParam(name = "member_name") String memberName, @RequestParam(name = "course_id") long courseId) {
        MemberDetails memberDetails = memberDetailsService.loadMemberByMemberName(memberName);
        int memberAvailablePoints = memberDetails.getAvailablePoints();

        CourseDetails courseDetails = courseDetailsService.findCourseById(courseId);
        int courseCapacity = courseDetails.getCapacity();
        int coursePoints = courseDetails.getNumberOfPoints();
        CourseBookingResponseModel courseBookingResponseModel = new CourseBookingResponseModel();
        if (memberAvailablePoints >= coursePoints && courseCapacity > 0) {

            courseDetails.setCapacity(courseCapacity - 1);
            memberDetails.setAvailablePoints(memberAvailablePoints - coursePoints);

            courseDetailsService.saveCourseDetails(courseDetails);
            memberDetailsService.saveMemberDetails(memberDetails);
            courseBookingResponseModel.setStatus("Success");
        }
        else if(memberAvailablePoints <= coursePoints){
            courseBookingResponseModel.setStatus("Failed");
            courseBookingResponseModel.setReturnMessage("Not Enough Points");
        }
        else if(courseCapacity > 0){
            courseBookingResponseModel.setStatus("Failed");
            courseBookingResponseModel.setReturnMessage("Booking is full");
        }

        return courseBookingResponseModel;
    }
}

package com.dancelab.booking.service;

import com.dancelab.booking.entity.CourseDetails;
import com.dancelab.booking.repository.CourseDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseDetailsService {

    @Autowired
    private CourseDetailsRepository courseDetailsRepository;

    public List<CourseDetails> listCourseDetails(String courseDate){
        return courseDetailsRepository.findByCourseDate(courseDate);
    }

    public List<CourseDetails> listCourseDetailsWithSpecificPeriod(String courseDateFrom, String courseDateTo){
        return courseDetailsRepository.findByCourseDateBetween(courseDateFrom,courseDateTo);
    }

    public CourseDetails findCourseById(long id){
        return courseDetailsRepository.findById(id);
    }

    public CourseDetails saveCourseDetails(CourseDetails courseDetails){
        return courseDetailsRepository.save(courseDetails);
    }
}

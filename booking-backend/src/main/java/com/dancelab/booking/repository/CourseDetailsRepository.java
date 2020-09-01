package com.dancelab.booking.repository;

import com.dancelab.booking.entity.CourseDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseDetailsRepository extends JpaRepository<CourseDetails, Long> {

    List<CourseDetails> findByCourseDate(String courseDate);

    List<CourseDetails> findByCourseDateBetween(String courseDateFrom, String courseDateTo);

    CourseDetails findById(long id);

}

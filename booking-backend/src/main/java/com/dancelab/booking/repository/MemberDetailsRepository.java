package com.dancelab.booking.repository;

import com.dancelab.booking.entity.MemberDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberDetailsRepository extends JpaRepository<MemberDetails, Long> {

    MemberDetails findByMemberId(String memberId );

    MemberDetails findByMemberName(String memberName );



}

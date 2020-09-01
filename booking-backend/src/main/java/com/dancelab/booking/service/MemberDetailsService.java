package com.dancelab.booking.service;

import com.dancelab.booking.entity.MemberDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberDetailsService {

    @Autowired
    private com.dancelab.booking.repository.MemberDetailsRepository memberDetailsRepository;

    public MemberDetails loadMemberByMemberId(String memberId){
        return memberDetailsRepository.findByMemberId(memberId);
    }

    public MemberDetails loadMemberByMemberName(String memberName){
        return memberDetailsRepository.findByMemberName(memberName);
    }

    public MemberDetails saveMemberDetails(MemberDetails memberDetails){
        return memberDetailsRepository.save(memberDetails);
    }

}

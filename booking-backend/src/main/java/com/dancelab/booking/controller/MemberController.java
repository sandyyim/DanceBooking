package com.dancelab.booking.controller;

import com.dancelab.booking.entity.MemberDetails;
import com.dancelab.booking.service.MemberDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("http://localhost:4200")
@RestController
public class MemberController {

    @Autowired
    private MemberDetailsService memberDetailsService;

    @GetMapping("/test")
    public String test(){
        return "testing";
    }

//    @PostMapping("/member")
//    public MemberDetails showMemberName(@RequestBody String  ){
//        // display member details
//        MemberDetails memberDetails =  memberDetailsService.listMemberDetails(memberId);
//        return memberDetails;
//    }

    @PostMapping("/member/details")
    public MemberDetails showMemberDetails(@RequestParam(name="member_name") String memberName ){
        // display member details
        MemberDetails memberDetails =  memberDetailsService.loadMemberByMemberName(memberName);
        return memberDetails;
    }

//    @PostMapping("/member/package")
//    public MemberDetails showMemberPackage(@RequestParam(name="member_id") String memberId ){
//        MemberDetails memberDetails =  memberDetailsService.listMemberDetails(memberId);
//        return memberDetails;
//    }
}

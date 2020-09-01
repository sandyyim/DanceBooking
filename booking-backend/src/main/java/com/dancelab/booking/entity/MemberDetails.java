package com.dancelab.booking.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "member_details")
public class MemberDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "member_id")
    private String memberId;

    @Column(name = "member_name")
    private String memberName;

    @Column(name = "password")
    private String password;

    @Column(name = "member_full_name")
    private String memberFullName;

    @Column(name = "member_tel")
    private String memberTel;

    @Column(name = "member_email")
    private String memberEmail;

    @Column(name = "member_birthday_month")
    private Integer memberBirthdayMonth;

    @Column(name = "member_birthday_date")
    private Integer memberBirthdayDate;

    @Column(name = "join_date")
    private String joinDate;

    @Column(name = "member_gender")
    private String memberGender;

    @Column(name = "member_address")
    private String memberAddress;

    @Column(name = "available_points")
    private Integer availablePoints;

    @Column(name = "package_type")
    private String packageType;

    @Column(name = "package_start_date")
    private String packageStartDate;

    @Column(name = "package_end_date")
    private String packageEndDate;

    public MemberDetails() {
    }

    public MemberDetails(Long id, @NotNull String memberId, String memberName, String password,String memberFullName, String memberTel, String memberEmail, Integer memberBirthdayMonth, Integer memberBirthdayDate, String joinDate, String memberGender, String memberAddress, Integer availablePoints, String packageType, String packageStartDate, String packageEndDate) {
        this.id = id;
        this.memberId = memberId;
        this.memberName = memberName;
        this.password = password;
        this.memberFullName = memberFullName;
        this.memberTel = memberTel;
        this.memberEmail = memberEmail;
        this.memberBirthdayMonth = memberBirthdayMonth;
        this.memberBirthdayDate = memberBirthdayDate;
        this.joinDate = joinDate;
        this.memberGender = memberGender;
        this.memberAddress = memberAddress;
        this.availablePoints = availablePoints;
        this.packageType = packageType;
        this.packageStartDate = packageStartDate;
        this.packageEndDate = packageEndDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMemberId() {
        return memberId;
    }

    public void setMemberId(String memberId) {
        this.memberId = memberId;
    }

    public String getMemberName() {
        return memberName;
    }

    public void setMemberName(String memberName) {
        this.memberName = memberName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMemberFullName() {
        return memberFullName;
    }

    public void setMemberFullName(String memberFullName) {
        this.memberFullName = memberFullName;
    }

    public String getMemberTel() {
        return memberTel;
    }

    public void setMemberTel(String memberTel) {
        this.memberTel = memberTel;
    }

    public String getMemberEmail() {
        return memberEmail;
    }

    public void setMemberEmail(String memberEmail) {
        this.memberEmail = memberEmail;
    }

    public Integer getMemberBirthdayMonth() {
        return memberBirthdayMonth;
    }

    public void setMemberBirthdayMonth(int memberBirthdayMonth) {
        this.memberBirthdayMonth = memberBirthdayMonth;
    }

    public Integer getMemberBirthdayDate() {
        return memberBirthdayDate;
    }

    public void setMemberBirthdayDate(int memberBirthdayDate) {
        this.memberBirthdayDate = memberBirthdayDate;
    }

    public String getJoinDate() {
        return joinDate;
    }

    public void setJoinDate(String joinDate) {
        this.joinDate = joinDate;
    }

    public String getMemberGender() {
        return memberGender;
    }

    public void setMemberGender(String memberGender) {
        this.memberGender = memberGender;
    }

    public String getMemberAddress() {
        return memberAddress;
    }

    public void setMemberAddress(String memberAddress) {
        this.memberAddress = memberAddress;
    }

    public Integer getAvailablePoints() {
        return availablePoints;
    }

    public void setAvailablePoints(int availablePoints) {
        this.availablePoints = availablePoints;
    }

    public String getPackageType() {
        return packageType;
    }

    public void setPackageType(String packageType) {
        this.packageType = packageType;
    }

    public String getPackageStartDate() {
        return packageStartDate;
    }

    public void setPackageStartDate(String packageStartDate) {
        this.packageStartDate = packageStartDate;
    }

    public String getPackageEndDate() {
        return packageEndDate;
    }

    public void setPackageEndDate(String packageEndDate) {
        this.packageEndDate = packageEndDate;
    }

    @Override
    public String toString() {
        return "MemberDetails{" +
                "id=" + id +
                ", memberId='" + memberId + '\'' +
                ", memberName='" + memberName + '\'' +
                ", password='" + password + '\'' +
                ", memberFullName='" + memberFullName + '\'' +
                ", memberTel='" + memberTel + '\'' +
                ", memberEmail='" + memberEmail + '\'' +
                ", memberBirthdayMonth=" + memberBirthdayMonth +
                ", memberBirthdayDate=" + memberBirthdayDate +
                ", joinDate='" + joinDate + '\'' +
                ", memberGender='" + memberGender + '\'' +
                ", memberAddress='" + memberAddress + '\'' +
                ", availablePoints=" + availablePoints +
                ", packageType='" + packageType + '\'' +
                ", packageStartDate='" + packageStartDate + '\'' +
                ", packageEndDate='" + packageEndDate + '\'' +
                '}';
    }
}

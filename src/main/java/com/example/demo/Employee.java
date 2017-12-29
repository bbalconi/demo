package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Employee {

  private @Id @GeneratedValue Long id;
  private String firstName;
  private String lastName;
  private String identity;

  private Employee() {}

  public Employee(String firstName, String lastName, String identity) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.identity = identity;
  }
}
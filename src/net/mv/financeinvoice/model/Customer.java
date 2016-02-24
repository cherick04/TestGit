package net.mv.financeinvoice.model;

import javax.persistence.*;

@Entity
@Table(name = "EMPLOYEE_INFO")
public class Customer {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "FIRST_NAME")
    private String firstName;
    @Column(name = "LAST_NAME")
    private String lastName;
    @Column(name = "JOB_TITLE")
    private String jobTitle;
    @Column(name = "DEPARTMENT")
    private String department;
    @Column(name = "SALARY")
    private int salary;
    // constructor and setter and getter
    
    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    
    @Override
    public boolean equals(Object obj) {
	if (this == obj) {
	    return true;
	}
	if (!(obj instanceof Customer)) {
	    return false;
	}
	Customer employee = (Customer) obj;
	if (firstName != null ?
		!firstName.equals(employee.firstName)
		: employee.firstName != null) {
	    	return false;
	} else {
	    return true;
		}	
    } 
    
    @Override
    public int hashCode() {
	return firstName != null ? firstName.hashCode() : 0;
    }
    
    public String toString() {
        return "Employee [id=" + id + ", name=" + firstName + ""
        + lastName
        + ", jobTitle=" + jobTitle + " department="
        + department
        + " salary=" + salary + "]";
    }
      
}

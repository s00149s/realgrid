package egovframework.example.sample.service;

public class CustomerOrders {

    private int id;
    private int orderId;
    private String customerId;
    private int employeeId;
    private String orderDate;
    private String companyName;
    private String country;
    private String phone;
    private String productName;
    private String quantityPerUnit;
    private int quantity;
    private int unitPrice;
    private String state;

    public int getOrderId() {
        return orderId;
    }
    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }
    public String getCustomerId() {
        return customerId;
    }
    public void setCustomerId(String customerId) {
        this.customerId = customerId;
    }
}
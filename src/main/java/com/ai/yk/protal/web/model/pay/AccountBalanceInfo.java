package com.ai.yk.protal.web.model.pay;

/**
 * 账户余额信息
 * Created by liutong on 16/11/14.
 */
public class AccountBalanceInfo {
    /*
    账户ID
     */
    private long accountId;
    /*
    余额 单位:厘
     */
    private long balance;
    /*
    是否需要密码
     */
    private String payCheck;

    public long getAccountId() {
        return accountId;
    }

    public void setAccountId(long accountId) {
        this.accountId = accountId;
    }

    public long getBalance() {
        return balance;
    }

    public void setBalance(long balance) {
        this.balance = balance;
    }

    public String getPayCheck() {
        return payCheck;
    }

    public void setPayCheck(String payCheck) {
        this.payCheck = payCheck;
    }
}

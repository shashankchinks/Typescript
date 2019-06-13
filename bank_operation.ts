{
    class bank{
        name: string;
        branch: string;
        address: string;
        transaction: transaction_type;
        min_deposite: number;
        left_balance: number;
        constructor(bank_name: string, bank_branch: string, bank_address: string, bank_transaction:transaction_type, bank_min_deposite: number, bank_left_balance: number){
            this.name = bank_name;
            this.branch = bank_branch;
            this.address = bank_address;
            this.transaction = bank_transaction;
            this.min_deposite = bank_min_deposite;
            this.left_balance = bank_left_balance;
        }

        deposit(){
            console.log()
        }

        withdraw(){

        }

        get_balance(){
            
        }

    }

    interface Icustomer{
        address: string;
        contact: number;
        name: string;
    }
    
    interface Ibank_account{
        account_number: number;
        customer_name: string;
        account_type: bank_account_type;
    }

    enum bank_account_type {
        "saving","salary","current"
    }

    enum transaction_type {
        "deposite","withdraw","balance"
    }

    let customer1: Icustomer = {
        address : 'Mumbai',
        contact : 9742958513,
        name    : 'Shashank Agrawal'
    }

    let bank_account1: Ibank_account = {
        account_number : 1,
        customer_name  : customer1.name,
        account_type   : bank_account_type.salary
    }

    let customer2: Icustomer = {
        address : 'Bangalore',
        contact :  8548864174,
        name    :  'Mayank Agrawal'
    }

    let bank_account2: Ibank_account = {
        account_number  : 2,
        customer_name   : customer2.name,
        account_type    : bank_account_type.saving
    }








}
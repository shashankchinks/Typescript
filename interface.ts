{
    //Interface holds only signature of metadata/functions
    //Interface can not create object/instance
    //method signature + variable 
    interface Ipayment{
        transaction(amount: number, reference_num: string, user_id: number): number;
        reversePayment(transactionId: number): boolean;
    }
}
package kr.co.rland.web;

public class Test {
    public static void main(String[] args) {
        int i, j;
        int temp;
        int a[] = {75,95,85,100,50};

        for(i = 0; i < 4; i++){
            for (j = 0; j < 4-i; j++){
                if(a[j] > a[j+1]){
                    temp = a[j];
                    a[j] = a[j+1];
                    a[j+1] = temp;
                    System.out.printf("temp = a[j] = %d\n", temp);
                    System.out.printf("a[j] = a[j+1] = %d\n", a[j]);
                    System.out.printf("a[j+1] = %d\n", a[j+1]);
                }
            }
        }
    }
}

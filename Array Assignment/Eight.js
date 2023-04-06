Sum_of_2d_array(arr)
{
    intsum_time =0;
    intsum_value=0;

    for(i=0;i<arr.length;i++)
    {
        sum_time = sum_time + arr[i,0];
    }
    print(sum_time);

    for(i=0;i<arr.length;i++)
    {
        sum_value = sum_value + arr[i,1];
    }
    print(sum_value);
}
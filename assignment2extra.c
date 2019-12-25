#include<stdio.h>
#include<stdlib.h>
#include<time.h>

enum Vars{count=90000};

void getDataSet(int d1[], int d2[], int d3[]);

void QuickSort(int array[], int low, int high);
void MergeSort(int array[], int low, int high);
void Merge(int array[], int low, int high, int mid);
int partition(int array[], int low, int high);
void interchange(int array[], int low, int high);
void QuickSort_R(int array[], int low, int high);

int main()
{
	srand(time(0));
	int d1[count], d2[count], d3[count];
	getDataSet(d1,d2,d3);
	
	long double qstart=clock();
	QuickSort(d1, 0, count-1);
	long double qstop=clock();
	long double qtime = (qstop-qstart)/CLOCKS_PER_SEC;
	printf("\nRuntime QuickSort: %Lf", qtime);
	
	long double rstart=clock();
	QuickSort(d2, 0, count-1);
	long double rstop=clock();
	long double rtime = (rstop-rstart)/CLOCKS_PER_SEC;
	printf("\nRuntime Randomized QuickSort: %Lf", rtime);
	
	long double mstart = clock();
	MergeSort(d3, 0, count-1);
	long double mstop = clock();
	long double mtime = (mstop-mstart)/CLOCKS_PER_SEC;
	printf("\nRuntime MergeSort: %Lf", mtime);

	return 0;
}

void getDataSet(int d1[], int d2[], int d3[])
{
	int min=1;
	int max=10000;
	static int data[count];
	for(int n=0; n<count; n++)
	{
		int x=rand()%count+1;
		d1[n]=x;
		d2[n]=x;
		d3[n]=x;
	}
}

void QuickSort(int array[], int low, int high)
{
	int i=low, j=high, s;
	int pivot=array[low];
	
	do
	{
		while(array[i]<pivot) i++;
		while(array[j]>pivot) j--;
		if(i<=j)
		{
			s=array[i];
			array[i]=array[j];
			array[j]=s;
			i++;
			j--;
		}
	}while(i<=j);
	if(low<j) QuickSort(array,low, j);
	if(i<high) QuickSort(array,i,high);
}



int partition(int array[], int low, int high)

{

 int v=array[low];

 int i=low;

 int j=high;

 do

 {

  do

   i++;

  while(array[i]<v);

  do

   j--;

  while(array[j]>v);

  if(i<j)

   interchange(array, i, j);

 }while(i<=j);

 array[low]=array[j];

 array[j]=v;

 return j;

}


void interchange(int array[], int low, int high)

{

 int swp;

 swp=array[low];

 array[low]=array[high];

 array[high]=swp;

}



void QuickSort_R(int array[], int low, int high)

{

 int j, k;

 if(low<high)

 {

  k=rand() % (high-low+1)+low;

  interchange(array, k, low);


  j=partition(array, low, high+1);  


  QuickSort_R(array, low, j-1);

  QuickSort_R(array, j+1, high);

 }

}




void Merge(int array[], int low, int high, int mid)
{
	int b[count];
	int i=low, j=mid+1, k=0;

	while(i<=mid&&j<=high)
	{
		if(array[i]<=array[j])
		b[k++]=array[i++];
		else
		b[k++]=array[j++];
	}
	while(i<=mid)
	{
		b[k++]=array[i++];
	}
	while(j<=high)
	{
		b[k++]=array[j++];
	}
	k--;
	while(k>=0)
	{
		array[low + k]=b[k];
		k--;
	}
}

void MergeSort(int array[], int low, int high)
{
	if(low<high)
	{
		int mid=(high+low)/2;
		MergeSort(array,low,mid);
		MergeSort(array,mid+1,high);
		Merge(array,low,mid,high);
	}
}
	
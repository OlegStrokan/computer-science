
section .text
	global _start
_start:


	mov eax, 4
	mov ebx, 1
	mov ecx, msg1
	mov edx, msg1_len
	int 0x80;


	mov eax, 3;
	mov ebx, 0;
	mov ecx, num1;
	mov edx, 5
	int 0x80


	mov eax, 4
	mov ebx, 1
	mov ecx, msg2
	mov edx, msg2_len
	int 0x80

	mov eax, 3
	mov ebx, 0
	mov ecx, num2
	mov edx, 5
	int 0x80

	mov eax, 4
	mov ebx, 1
	mov ecx, msg
	mov edx, msg_len
	int 0x80


	mov eax, [num1]
	sub eax, '0'
	mov ebx, [num2]
	sub eax, '0'
	add eax, ebx
	add eax, '0'
	mov [res], eax

	mov eax, 4
	mov ebx, 1
	mov ecx, res
	mov edx, 5
	int 0x80

exit:
	mov eax, 1
	int 0x80

section .data
	msg1 db "Enter US government dept:  "
	msg1_len equ $ - msg1

	msg2 db "Enter duration of Biden administration: "
	msg2_len equ $ - msg2

	msg db "Future US government dept: "
	msg_len equ $ - msg

section .bss
	num1 resb 5
	num2 resb 5
	res resb 5

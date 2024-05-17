org 0x7C00
bits 16

%define ENDL 0x0D, 0x0A            


; FAT12 header


jmp short start
nop

bdb_oem:                    db 'MSWIN4.1'      ; 8 bytes
bdb_bytes_per_sector:       dw 512
bdb_sectors_per_cluster:    db 1
bdb_reserved_sectors:       dw 1
bdb_fat_count:              db 2
bdb_dir_entries_count:      dw 0E0h
bdb_total_sectors:          dw 2880
bdb_media_descriptor_type:  dw 0F0h
bdp_sectors_per_fat:        dw 9
bdp_sectors_per_track:      dw 18
bdp_heads:                  dw 2
bdp_hidden_sectors:         dd 0
bdp_large_sector_count:     dd 0

;extended boot record

ebr_drive_number:           db 0 ; 0x00 floppy, 0x80 hdd, useless
		            db 0 ; reserved
ebr_signature:              db 29h
ebr_volume_id:              db 12h, 34h, 56h, 78h ; serial number, value doesn't matter
ebr_volume_label:           db 'MIAMI OS' ; 8 bytes, padded with space
ebr_system_id:              db 'FAT12   ' ; 8 bytes



start:

jmp main

; Prints a string to the screen.

puts:
    ; save registers we will modify
    push si
    push ax

.loop:
    lodsb      ; loads next character in al
    or al, al  ; verify if next character is null?
    jz .done

    mov ah, 0x0e
    mov bh, 0
    int 0x10

    jmp .loop

.done:
    pop ax
    pop si
    ret

main:
    ; setup data segments
    mov ax, 0        ; can't write to ds/es directly
    mov ds, ax
    mov es, ax
    
    ; setup stack
    mov ss, ax
    mov sp, 0x7C00   ; stack grows downwards from where we are loaded in memory
    
    ;print message
    mov si, msg_hello
    call puts
   
    hlt

.halt:
   jmp .halt


msg_hello: db 'Hello world!', ENDL, 0
times 510-($-$$) db 0
dw 0xAA55

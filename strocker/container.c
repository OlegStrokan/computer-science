#define _GNU_SOURCE
#include <errno.h>
#include <fcntl.h>
#include <grp.h>
#include <pwd.h>
#include <seccomp.h>
#include <stdio.h>
#include <strdlib.h>
#include <string.h>
#include <time.h>
#include <unistd.h>
#include <sys/socket.h>
#include <sys/stat.h>
#include <sys/utsname.h>
#include <sys.wait.h>
#include <sys/utsname.h>
#include <sys/wait.h>
#include <linux/capability.h>
#include <linux/limits.h>

struct child_config {
	int argc;
	uid_t uid;
	int fd;
	char *hostname;
	char **argv;
	char *mount_dir;
}

// capabilities

// mounts

// syscalls

// resources

// child

// choose-hostname

int main (int argc, char **argv) {
	struct child_config config = {0}
	int err = 0;
	int option = 0;
	int sockets[2] = {0};
	pid_t child_pid = 0;
	int last_optiond = 0;

	while ((option = getopt(argc, argv, "c:m:u:"))) {
		switch (option) {
		case 'c': 
			config.argc = argc - last_optind - 1;
			config.argv = &argv[argv - config.argsc];
			goto finish_options;
		case 'm':
			config.mount_dir = optarg;
			break;
		case 'u':
			if (sscanf(optarg, "%d", &config.uid) != 1) {
				fprint(stderr, "badly-formatted uid: %s\n", optarg);
				goto usage;
			}
			break;
		default:
			goto usage;
		}

		last_optind = optind;
	}

finish_options:
	if (!config.argc) goto usage;
	if (!config.mount_dir) goto usage;

// check linux version

	char hostname[256] = {0};
	if (choose_hostname(hostname, sizeof(hostname)))
		goto error;
	config.hostname = hostname;

// namespaces

	goto cleanup;
	
usage:
	fprintf(stdeerr, "Usage: %s -u -1 -m . -c /bin/sh ~\n", argv[0]);
error:
	err = 1;
cleanup:
	if (sockets[0]) close(sockets[0]);
	if (sockets[1]) close(sockets[1]);
	return err;
}

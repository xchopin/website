git filter-branch --commit-filter '
        if [ "$GIT_COMMITTER_NAME" = "Xavier Chopin <x.chopin54@gmail.com>" ];
        then
                GIT_COMMITTER_NAME="<xchopin>";
                GIT_AUTHOR_NAME="<xchopin>";
                GIT_COMMITTER_EMAIL="<xchopin54@gmail.com>";
                GIT_AUTHOR_EMAIL="<xchopin54@gmail.com>";
                git commit-tree "$@";
        else
                git commit-tree "$@";
        fi' HEAD
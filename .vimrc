autocmd!

 call pathogen#infect()

 set backspace=indent,start,eol
 set exrc
 set autoindent
 set noautowrite
 set nobackup
 set writebackup
 set sidescroll=1
 set shiftwidth=2
 set updatecount=0
 set taglength=0
 set tags+=../tags,/usr/local/include/tags,/usr/include/tags
 set wrapscan
 set shell=$SHELL\ -f
 set ruler
 set report=1
 set tabstop=2
 set expandtab
 set noicon
 set noshowmode
 set wildmode=longest,list,full
 set showmatch
 set helpheight=100
 set guioptions=ail
 set guicursor=a:block-blinkoff0
 set hlsearch
 set nostartofline
 set background=light
 set highlight=l:MySearch
 set clipboard=autoselect
 set visualbell t_vb=
 set viminfo=
 set history=500
 set laststatus=0 

 au BufNewFile,BufRead *.twig set syntax=jinjahtml
 au BufNewFile,BufRead *.css set syntax=distinguished-modified

 set backspace=eol,start,indent
 syntax enable
 filetype plugin indent on
 map <F2> :w<CR>
 map <F3> :wq<CR>

inoremap <expr> <C-Space> pumvisible() \|\| &omnifunc == '' ?
\ "\<lt>C-n>" :
\ "\<lt>C-x>\<lt>C-o><c-r>=pumvisible() ?" .
\ "\"\\<lt>c-n>\\<lt>c-p>\\<lt>c-n>\" :" .
\ "\" \\<lt>bs>\\<lt>C-n>\"\<CR>"
imap <C-@> <C-Space>

set backspace=eol,start,indent
 syntax enable

 au BufRead,BufNewFile *.twig set syntax=jinja
 au BufRead,BufNewFile *.jade set syntax=jade
 autocmd BufRead *.cql set syntax=cql
 map <F2> :w<CR>
 map <F3> :wq<CR>
 inoremap <Nul> <C-n>
 let g:loaded_matchparen=1


if $COLORTERM == 'gnome-terminal'
  set term=gnome-256color
  colorscheme default
endif

colorscheme jellybeans

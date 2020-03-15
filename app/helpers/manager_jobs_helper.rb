module ManagerJobsHelper

  ##
  # Expects job_element. Renders pending/expired/successful icon for
  # job index page cards.
  #
  def pending_interview(job_element)
    date_created =  job_element.created_at
    date_today = Date.today
    invited_for_interview = job_element.interview
    id = job_element.id

    case
    when date_created + 30.days < date_today && !invited_for_interview
      # Expired
      "<span class='badge badge-danger'>Expired</span>".html_safe
    when invited_for_interview
      # Interview Happened
      "<span class='badge badge-success'>Invited</span>".html_safe
    else
      # Pending
      "<span class='badge badge-primary'>Pending</span>".html_safe
    end
  end
end
